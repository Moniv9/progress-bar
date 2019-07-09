export class ProgressBar {

  private selector: string;
  private progressBar: HTMLElement;
  private intervalInstance: any;
  private currentPercentage: number;

  constructor(private percentage: number) {
    this.selector = 'progress-bar';
    this.progressBar = document.getElementById(this.selector);
    this.currentPercentage = 0;
  }

  setStyle(color: string): void {
    this.progressBar.style.width = '0%';
    this.progressBar.style.height = '20px';
    this.progressBar.style.backgroundColor = color;
  }

  showProgress(): void {
    this.currentPercentage += 10;
    this.progressBar.style.width = `${this.currentPercentage}%`;

    if (this.currentPercentage >= this.percentage) {
      clearInterval(this.intervalInstance);
    }
  }

  render(color: string = 'orange'): void {
    this.setStyle(color);
    this.intervalInstance = setInterval(this.showProgress.bind(this), 80);
  }
}

const progressBar = new ProgressBar(100);
progressBar.render();




