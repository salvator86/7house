import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatePipe} from "../../core/pipes/translate.pipe";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-projects-screen',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ProjectComponent],
  templateUrl: './projects-screen.component.html',
  styleUrls: ['./projects-screen.component.scss', './projects-screen-2.component.scss']
})
export class ProjectsScreenComponent implements AfterViewInit {

  @Input() projects: any;
  @Output() modalEmitter = new EventEmitter();
  @Output() onModalOpen = new EventEmitter();
  @Output() currenProjectIndexEmitter = new EventEmitter();

  @ViewChild('itemsContainer', { static: false }) itemsContainer:  ElementRef<HTMLDivElement>;

  private maxScrollLeft: number = 576;
  isLeftButtonDisabled: boolean = true;
  isRightButtonDisabled: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.itemsContainer.nativeElement.addEventListener('scroll', this.updateScrollButtons.bind(this));
  }

  scrollLeft(): void {
    const container = this.itemsContainer.nativeElement;
    const currentScrollLeft = container.scrollLeft;
    const newScrollLeft = Math.max(0, currentScrollLeft - this.maxScrollLeft);
    this.renderer.setProperty(container, 'scrollLeft', newScrollLeft);
    this.updateScrollButtons();
  }

  scrollRight(): void {
    console.log('check');
    const container = this.itemsContainer.nativeElement;
    const currentScrollLeft = container.scrollLeft;
    const newScrollLeft = Math.min(container.scrollWidth - container.clientWidth, currentScrollLeft + this.maxScrollLeft);
    this.renderer.setProperty(container, 'scrollLeft', newScrollLeft);
    this.updateScrollButtons();
  }

  updateScrollButtons(): void {
    const container = this.itemsContainer.nativeElement;

    this.isLeftButtonDisabled = container.scrollLeft === 0;
    this.isRightButtonDisabled = container.scrollLeft === (container.scrollWidth - container.clientWidth);
  }

  openProjectsModal(index: number) {
    this.modalEmitter.emit('projects');
    this.onModalOpen.emit();
    this.currenProjectIndexEmitter.emit(index);
  }

}
