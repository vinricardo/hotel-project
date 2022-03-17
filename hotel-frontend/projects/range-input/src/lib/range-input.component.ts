import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-range-input',
  template: `
    <div class="background" id="bg"></div>
    <section id="section">
      <div id="header">
        <h1>{{ actualMonth }}</h1>
      </div>
      <hr />
      <div id="calendar">
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ng-container
                *ngFor="let daysInWeek of filterDaysByMonth(); let j = index"
              >
                <td>
                  <ng-container *ngFor="let day of daysInWeek; let i = index">
                    <span
                      *ngIf="daysInWeek[i] != null"
                      id="day"
                      (click)="markDay(day); getRange()"
                      [ngClass]="{
                        focused:
                          daysInWeek[i] == basedDay || daysInWeek[i] == farDay,
                        interval:
                          daysInWeek[i] > basedDay! && daysInWeek[i] < farDay!
                      }"
                      >{{ daysInWeek[i] }}</span
                    >
                    <span
                      *ngIf="daysInWeek[i] == null"
                      id="day"
                      class="disabled"
                      >'</span
                    >
                  </ng-container>
                </td>
              </ng-container>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="footer">
        <span>Select the date to hosped self.</span>
      </div>
    </section>
  `,
  styleUrls: ['./range-input.component.scss'],
})
export class RangeInputComponent implements OnInit, OnDestroy {
  firstOcorrenceToDay!: number;
  localDate = new Date();
  daysInMonth = new Date(
    this.localDate.getFullYear(),
    this.localDate.getMonth() + 1,
    0
  ).getDate();
  rangeDays = new Array(this.daysInMonth);
  basedDay!: number | undefined;
  farDay!: number | undefined;
  firstSelect: boolean = true;
  actualMonth!: string;
  rangeSelected!: any[];
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  @Output() dropdownAction = new EventEmitter<boolean>();
  @Output() value = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.firstOcorrenceToDay = this.checkWeekDay(1);
    this.getMonth();
    document.addEventListener('click', (el: any) => {
      if (el.target.className == 'background') {
        document.getElementById('bg')!.style.display = 'none';
        document.getElementById('section')!.style.display = 'none';
        this.dropdownAction.emit(false);
      }
    });
  }

  getMonth() {
    const d = new Date();
    this.actualMonth = this.months[d.getMonth()];
  }

  markDay(day: any) {
    if (this.firstSelect) {
      if (this.basedDay == undefined) this.basedDay = day;
      else if (this.farDay == undefined) {
        this.farDay = day;
        this.firstSelect = false;
      }
    } else {
      this.basedDay = day;
      this.farDay = undefined;
      this.firstSelect = true;
    }

    if (this.basedDay! > this.farDay!) {
      let moments = [this.basedDay, this.farDay];
      this.basedDay = moments[1];
      this.farDay = moments[0];
    }
  }

  checkWeekDay(day: number) {
    return new Date(
      this.localDate.getFullYear(),
      this.localDate.getMonth(),
      day
    ).getDay();
  }

  filterDaysByMonth() {
    let month: [any[], any[], any[], any[], any[], any[], any[]] = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ];

    for (let day = 1; day <= this.rangeDays.length; day++) {
      let dayInWeek = this.checkWeekDay(day);
      if (dayInWeek < this.firstOcorrenceToDay) {
        month[dayInWeek][0] = null;
      }
      month[dayInWeek].push(day);
    }
    return month;
  }

  getRange(): void {
    this.rangeSelected = [
      this.basedDay
        ? `${this.months[this.localDate.getMonth()]} ${this.basedDay} - `
        : '',
      this.farDay
        ? `${this.months[this.localDate.getMonth()]} ${this.farDay}`
        : '',
    ];

    this.value.emit(`${this.rangeSelected[0]}${this.rangeSelected[1]}`);
  }

  ngOnDestroy(): void {}
}
