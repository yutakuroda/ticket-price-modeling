export class CinemaDate extends Date {
  isWeekDay(): boolean {
    return this.getDay() >= 1 && this.getDay() <= 5;
  }

  isLateShow(): boolean {
    return this.getHours() >= 20;
  }

  isCinemaDay(): boolean {
    return this.getDate() === 1;
  }
}
