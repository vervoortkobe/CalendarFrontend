import { Component } from '@angular/core';

@Component({
  selector: 'app-main-center',
  templateUrl: './main-center.component.html',
  styleUrl: './main-center.component.css',
})
export class MainCenterComponent {
  //#region Arrays
  weekdays = [
    'zondag',
    'maandag',
    'dinsdag',
    'woensdag',
    'donderdag',
    'vrijdag',
    'zaterdag',
  ];

  months = [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'December',
  ];
  //#endregion

  //#region Variables
  todayDate = new Date().getDate();
  thisYear = new Date().getFullYear();
  daysInThisMonth: any = [];
  daysOutThisMonthBefore = '';
  daysOutThisMonthAfter = '';
  countThisMonthNumber = new Date().getMonth() + 1;
  amountDaysInThisMonth = new Date(
    new Date().getFullYear(),
    this.countThisMonthNumber,
    0
  ).getDate();
  thisMonthName = this.months[this.countThisMonthNumber];
  firstDayOfThisMonthName =
    this.weekdays[
      new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
    ];
  calendar = this.daysInThisMonth; //this.daysOutThisMonthBefore + this.daysInThisMonth + this.daysOutThisMonthAfter;
  //#endregion

  //#region Constructor
  constructor() {
    for (let i = 0; i < this.amountDaysInThisMonth; i++) {
      if (i + 1 == this.todayDate)
        this.daysInThisMonth.push({
          today: true,
          year: this.thisYear,
          month: this.thisMonthName,
          date: this.todayDate,
          day: this.calcDayName(this.todayDate),
        });
      else
        this.daysInThisMonth.push({
          today: false,
          year: this.thisYear,
          month: this.thisMonthName,
          date: i + 1,
          day: this.calcDayName(i + 1),
        });
    }

    for (let i = 0; i < this.weekdays.length; i++) {
      // if zondag 0 | 0 + 1 -> 7 - 1 = 6 dagen toevoegen van voor, 1 dag van achter
      if (this.weekdays[i] === this.firstDayOfThisMonthName) {
        for (let j = 0; j < 7 - (i + 1); j++)
          this.daysOutThisMonthBefore += `<li class="out"<a></a></li>`;

        for (let k = 0; k < i + 6 - i; k++)
          this.daysOutThisMonthAfter += `<li class="out"><a></a></li>`;
      }
    }
  }
  //#endregion

  //#region Methods
  calcDayName(countDayInMonth: number) {
    return this.weekdays[
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        countDayInMonth
      ).getDay()
    ].toLowerCase();
  }
  //#endregion
}
