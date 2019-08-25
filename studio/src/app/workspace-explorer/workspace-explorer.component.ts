import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-workspace-explorer',
  templateUrl: './workspace-explorer.component.html',
  styleUrls: ['./workspace-explorer.component.css']
})
export class WorkspaceExplorerComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.route.params.subscribe(param => console.log(param));
  }
  treeControl = new NestedTreeControl<FoodNode>(
    node => node.children
    );
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

