import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  /* */
  public selectedId;
  bookmarks = [
	{"id": 1, "name": "Bookmark 01", "link": "lnk 01"},
	{"id": 2, "name": "Bookmark 02", "link": "lnk 02"},
	{"id": 3, "name": "Bookmark 03", "link": "lnk 03"},
	{"id": 4, "name": "Bookmark 04", "link": "lnk 04"},
	{"id": 5, "name": "Bookmark 05", "link": "lnk 05"}
]
  /* */

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {  
  	this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;    
    });  
  }

  onSelect(bookmark) {
    //this.router.navigate(['/bookmarks', bookmark.id]);
     this.router.navigate([bookmark.id], { relativeTo: this.route });
  }
  isSelected(bookmark) { return bookmark.id === this.selectedId; }

}
