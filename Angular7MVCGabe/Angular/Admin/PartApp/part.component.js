"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const operators_1 = require("rxjs/operators");
let PartComponent = class PartComponent {
    constructor(fb) {
        this.fb = fb;
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
                    { "label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo" }
                ]
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
        ];
    }
    createForm() {
        this.treeSearchCtrl = this.fb.control({ value: this.searchText });
        this.treeForm = this.fb.group({
            TreeSearch: this.treeSearchCtrl
        });
        const treeSearch = this.treeForm.get("TreeSearch");
        treeSearch.valueChanges.pipe(operators_1.debounceTime(this.debounceTime)).subscribe(value => this.searchTree(treeSearch.value));
    }
    nodeSelect(event) {
        console.log(event);
    }
    expandORcollapse(expand, nodes) {
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
    massageTree(nodes) {
        for (let node of nodes) {
            if (node.children) {
                for (let child of node.children) {
                    child.parent = node;
                    this.massageTree(node.children);
                }
            }
        }
    }
    searchTree(search) {
        // need to check if we already have the searched for node selected. if it is move to the next
        // node with the same characters.
        this.nodeFound = false;
        this.DFSRecursive(this.treeData, search.toLowerCase());
    }
    DFSRecursive(tree, search) {
        let i = 0;
        while (!this.nodeFound && i < tree.length) {
            let node = tree[i];
            if (node.label.toLowerCase().includes(search)) {
                this.nodeFound = true;
                if (node.parent) {
                    this.expandParents(node);
                }
                this.selectedNode = node;
            }
            else if (node.children) {
                this.DFSRecursive(node.children, search);
            }
            i++;
        }
        ;
    }
    expandParents(node) {
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
};
PartComponent = tslib_1.__decorate([
    core_1.Component({
        templateUrl: "../Angular/Admin/PartApp/part.template.html"
    }),
    tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder])
], PartComponent);
exports.PartComponent = PartComponent;
//# sourceMappingURL=part.component.js.map