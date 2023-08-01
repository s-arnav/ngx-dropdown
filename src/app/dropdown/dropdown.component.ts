import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options } from './dropdown.types';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() label = '';
  @Input() options: Options[] = [];
  @Input() searchable: boolean = false;
  @Input() selected: Options | undefined;
  @Output() selectedChange = new EventEmitter();

  isOpen = false;
  searchText = new FormControl('');
  searchResults: Options[] = JSON.parse(JSON.stringify(this.options));

  ngOnInit(): void {
    if (this.searchable) {
      if (this.selected) {
        this.searchText.setValue(this.selected.value);
      }
      this.searchText.valueChanges.subscribe((change) => {
        if (this.searchText.value?.length === 0) {
          this.selected = undefined;
          this.selectedChange.emit(undefined);
          this.isOpen = false;
          return;
        }
        if (change) {
          this.searchResults = this.options.filter((option) => {
            this.isOpen = true;
            return option.value
              .toLowerCase()
              .replaceAll(' ', '')
              .includes(
                change?.toLowerCase().replaceAll(' ', '') ?? 'NO_MATCH-1'
              );
          });
        }
      });
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: Options) {
    if (this.searchable) {
      this.searchText.setValue(option.value);
    }
    this.selected = option;
    this.selectedChange.emit(option);
    this.toggleDropdown();
  }
}
