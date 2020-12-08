import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TreeNode } from 'primeng-lts/api';
import { debounceTime } from 'rxjs/operators';

@Component({
  templateUrl: "../Angular/Admin/PartApp/part.template.html"
})
export class PartComponent implements OnInit, OnDestroy {
  treeData: TreeNode[];
  selectedNode: TreeNode;
  treeForm: FormGroup;
  treeSearchCtrl: FormControl;
  searchText: "Search";
  debounceTime: 500;
  nodeFound: boolean;
  expandParent: boolean;

  constructor(private readonly fb: FormBuilder) {
    this.searchText = "Search";
    this.nodeFound = false;
    this.expandParent = false;
    this.treeData = [
      {
        "label": "Documents",
        "data": "Documents Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{
          "label": "Work",
          "data": "Work Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": [{ "label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document" }]
        },
        {
          "label": "Home",
          "data": "Home Folder",
          "expandedIcon": "pi pi-folder-open",
          "collapsedIcon": "pi pi-folder",
          "children": [{ "label": "Invoices.txt", "icon": "pi pi-file", "data": "Invoices for this month" }]
        }]
      },
      {
        "label": "Pictures",
        "data": "Pictures Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [
          { "label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo" },
          { "label": "logo.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo" },
          { "label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo" }]
      },
      {
        "label": "Movies",
        "data": "Movies Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{
          "label": "Al Pacino",
          "data": "Pacino Movies",
          "children": [{ "label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "pi pi-file-video", "data": "Serpico Movie" }]
        },
        {
          "label": "Robert De Niro",
          "data": "De Niro Movies",
          "children": [{ "label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie" }]
        }]
      }
    ]
  }

  private createForm(): void {
    this.treeSearchCtrl = this.fb.control({ value: this.searchText });
    this.treeForm = this.fb.group({
      TreeSearch: this.treeSearchCtrl
    });

    const treeSearch = this.treeForm.get("TreeSearch");
    treeSearch.valueChanges.pipe(debounceTime(this.debounceTime)).subscribe(value =>
      this.searchTree(treeSearch.value));
  }

  nodeSelect(event: any): void {
    console.log(event);
  }

  expandORcollapse(expand: boolean, nodes: TreeNode[]): void {
    for (let node of nodes) {
      if (node.children) {
        node.expanded = expand;
        for (let cn of node.children) {
          this.expandORcollapse(expand, node.children);
        }
      }
    }
  }

  /**
   * This traverses the tree and creates parent relationships to ensure a healthy generation.
   * @param nodes - The TreeNode array.
   */
  private massageTree(nodes: TreeNode[]): void {
    for (let node of nodes) {
      if (node.children) {
        for (let child of node.children) {
          child.parent = node;
          this.massageTree(node.children);
        }
      }
    }
  }

  private searchTree(search: string): void {
    // need to check if we already have the searched for node selected. if it is move to the next
    // node with the same characters.
    this.nodeFound = false
    this.DFSRecursive(this.treeData, search.toLowerCase());
  }

  private DFSRecursive(tree: TreeNode[], search: string): void {
    let i = 0;
    while (!this.nodeFound && i < tree.length) {
      let node = tree[i];
      if (node.label.toLowerCase().includes(search)) {
        this.nodeFound = true;
        if (node.parent) {
          this.expandParents(node);
        }
        this.selectedNode = node;
      } else if (node.children) {
        this.DFSRecursive(node.children, search);
      }
      i++;
    };
  }

  private expandParents(node: TreeNode) {
    if (node.parent) {
      node.parent.expanded = true;
      this.expandParents(node.parent);
    }
  }

  ngOnInit() {
    this.createForm();
    this.massageTree(this.treeData);
  }

  ngOnDestroy() {
    // TODO
  }
}
