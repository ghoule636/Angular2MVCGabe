import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TreeNode } from 'primeng-lts/api';

@Component({
  templateUrl: "../Angular/Admin/PartApp/part.template.html"
})
export class PartComponent implements OnInit, OnDestroy {
  treeData: TreeNode[];
  selectedNode: TreeNode;
  treeForm: FormGroup;
  treeSearchCtrl: FormControl;
  searchText: string;
  debounceTime: 500;
  nodeFound: boolean;
  expandParent: boolean;
  keepGoing: boolean;
  lastSearch: string;

  constructor(private readonly fb: FormBuilder) {
    this.searchText = "Search";
    this.lastSearch = "";
    this.nodeFound = false;
    this.expandParent = false;
    this.keepGoing = false;
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
  }

  nodeSelect(event: any): void {
    console.log(event);
  }

  onSubmit(): void {
    this.searchTree(this.treeSearchCtrl.value);
  }

  /**
   * Will expand or collapse all nodes and children in the given list of nodes.
   * @param expand - True to expand false to collapse.
   * @param nodes - List of nodes to collapse or expand.
   */
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

  /**
   * Initiates the recursive tree search.
   * @param search - The string being searched for.
   */
  private searchTree(search: string): void {
    this.nodeFound = false
    // This if statement checks if we need to continue searching
    // for the next occurance of the search string.
    if (this.lastSearch == search) {
      this.keepGoing = true;
    } else {
      this.lastSearch = search;
    }
    let previousNode = this.selectedNode; // <- Used to check if we have hit the bottom of the tree
    this.DFSRecursive(this.treeData, search.toLowerCase());
    // This if statement will search the tree again in the case we have hit the bottom
    // of the tree in the search and want to wrap back to the top.
    if (previousNode == this.selectedNode) {
      this.keepGoing = false;
      this.DFSRecursive(this.treeData, search.toLowerCase());
    }
  }

  /**
   * Recursive function to search the tree for a given string.
   * @param tree - TreeNode[] the tree being iterated over.
   * See Documentation on primeng trees here: https://www.primefaces.org/primeng/v7.2.6-lts/#/tree
   * @param search - The string being searched for.
   */
  private DFSRecursive(tree: TreeNode[], search: string): void {
    let i = 0;
    while (!this.nodeFound && i < tree.length) {
      let node = tree[i];
      if (node.label.toLowerCase().includes(search)) {
        if (node != this.selectedNode && !this.keepGoing) {
          this.nodeFound = true;
          this.expandParents(node);
          this.selectedNode = node;
          this.nodeSelect(node);
        } else if (node == this.selectedNode) {
          this.keepGoing = false;
          if (node.children) {
            this.DFSRecursive(node.children, search);
          }
        } else if (node.children) {
          this.DFSRecursive(node.children, search);
        }
      } else if (node.children) {
        this.DFSRecursive(node.children, search);
      }
      i++;
    };
  }

  /**
   * Helper function that will expand the parents of a given node. Will recursively expand ancestors.
   * @param node - The node whose parents need to be expanded.
   */
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
