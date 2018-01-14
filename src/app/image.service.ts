import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

  imagesArray = [];
  
      getImages(){
          return this.imagesArray = IMAGES.slice(0);
      }
  
      getImage(id: number){
          return this.getImages().find(image => image.id === id);
      }
  }

const IMAGES =[
  {"id":1, "type": "rule", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 2-3-1. There is no traffic signalization, you should use the rule of right side.", "url":"assets/img/1.jpg"},
  {"id":2, "type": "rule", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 4-3-1-2. There are two emergency vehicles in the intersection. They have right to go before ordinary vehicles. Between them we use the rule of right side here, because there is no signalization. When emergency vehicles pass the intersection, we use rule of right side for ordinary vehicles, too.", "url":"assets/img/2.jpg"},
  {"id":3, "type": "rule", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 3-2-1. There is no traffic signalization, you should use the rule of right side.",  "url":"assets/img/3.jpg"},
  {"id":4, "type": "rule", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 1-3-2. When a motor vehicle turns across a bicycle path it has to give right of way to bicycles present on it. Here, the vehicle number 1 is on right side of the bicycle, so it can pass. Then the bicycle (number 3) goes before the vehicle number 2. ",  "url":"assets/img/4.jpg"},
  {"id":5, "type": "rule", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 2-3-1. There is no traffic signalization, you should use rule of right side.",  "url":"assets/img/5.jpg"},
  {"id":6, "type": "other", "question": "Which vehicles have to wait in front of the intersection?", "answer":"The vehicles 1 and 3 have to wait, because they are in front of and behind the police officer. Those vehicles coming from that two sides can not pass an intersection when a police officer regulates it. We don't look at traffic signs here, because a police officer has priority over them.",  "url":"assets/img/6.jpg"},
  {"id":7, "type": "other", "question": "You are in the black vehicle. Will you pass or not?", "answer": "Yes, you will pass, because you are on the police officer's left side. Those vehicles coming from left or right police officer's side can pass an intersection. We don't look at traffic signs and lights here because a police officer has priority over them.",  "url":"assets/img/7.jpg"},
  {"id":8, "type": "other", "question": "What should you do here, stop or continue?", "answer":"You will continue. Traffic lights have priority over traffic signs, so you can ignore that stop sign.", "url":"assets/img/8.jpg"},
  {"id":9, "type": "other", "question": "Will you continue or give right of way to the bus?", "answer":"The bus goes first, because traffic lights have priority over traffic signs, and two vehicles which gain green light at the same time decide who goes first according to the rule of right side",  "url":"assets/img/9.jpg"},
  {"id":10, "type": "other", "question": "You have green arrow. Who goes first, you or the red car?", "answer":"The red car goes first. When you have a green arrow like that one, you can turn right, but have to give right of way to all vehicles and pedestrians on a road where you have intention to turn on",  "url":"assets/img/10.jpg"},
  {"id":11, "type": "sign", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 3-1-2. The vehicle number 3 is on the main road, so it goes first. Then the vehicles number 1 and 2 use the rule of right side to decide who goes first. When two vehicles are on a same road, main or minor road, they use the rule of right side.",  "url":"assets/img/11.jpg"},
  {"id":12, "type": "sign", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 2-3-1-4. The vehicles number 1, 2 and 3 are on the main road. Using the rule of right side between them, we know that 2 and 3 go first. When two or more vehicles are on a same road, main or minor road, they use the rule of right side to decide their order. When a main road is clear, vehicles from a minor road can pass intersection.",  "url":"assets/img/12.jpg"},
  {"id":13, "type": "sign", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 3-2-1-4. The vehicles number 2 and 3 are on the main road. Using the rule of right side between them, we know that 3 goes first. When two or more vehicles are on a same road, main or minor road, they use the rule of right side to find their order. When a main road is clear, vehicles from a minor road can pass intersection. Here, the vehicle number 1 goes before the vehicle number 4.",  "url":"assets/img/13.jpg"},
  {"id":14, "type": "sign", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 2-1. The vehicle number 2 is on the main road, it goes first.",  "url":"assets/img/14.jpg"},
  {"id":15, "type": "sign", "question": "In which order the vehicles will pass the intersection?", "answer":"The order is 2-1-3. The vehicles number 1 and 2 are on the main road, 2 goes first because of the rule of right side. When two or more vehicles are on a same road, main or minor road, they use the rule of right side to find their order.",  "url":"assets/img/15.jpg"}
]
