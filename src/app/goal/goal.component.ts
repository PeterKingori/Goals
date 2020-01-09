import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'Watch The Equalizer', 'Find an online version and watch Denzel Washington do his thing!', new Date(2020, 3, 14)),
    new Goal(2, 'Buy cookies', 'I have to buy cookies to eat while watching the movie', new Date(2019, 5, 6)),
    new Goal(3, 'Solve math homework', 'It\'s due tomorrow so I have to get to it', new Date(2019, 9, 16)),
    new Goal(4, 'Get cat food', 'The cat likes expensive snacks', new Date(2020, 1, 8)),
    new Goal(5, 'Get new phone case', 'Diana has her birthday coming up soon', new Date(2020, 2, 2)),
    new Goal(6, 'Plot world domination', 'Because I am an evil overlord', new Date(2030, 1, 1))
  ];

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
