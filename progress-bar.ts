export class ProgressBar {
  private selector: string;
  private progressBar: HTMLElement | any;
  private intervalInstance: any;
  private currentPercentage: number;

  public speed = 80;
  public barHeight = 30;
  public color = "orange";

  constructor(private percentage: number) {
    this.selector = "progress-bar";
    this.progressBar = document.getElementById(this.selector);
    this.currentPercentage = 0;
  }

  private get height(): number {
    return this.barHeight;
  }

  private setStyle(): void {
    this.progressBar.style.width = "0%";
    this.progressBar.style.height = `${this.height}px`;
    this.progressBar.style.backgroundColor = this.color;
  }

  private showProgress(): void {
    this.currentPercentage += 10;
    this.progressBar.style.width = `${this.currentPercentage}%`;

    if (this.currentPercentage >= this.percentage) {
      clearInterval(this.intervalInstance);
    }
  }

  render(): void {
    this.setStyle();
    this.intervalInstance = setInterval(
      this.showProgress.bind(this),
      this.speed
    );
  }
}
