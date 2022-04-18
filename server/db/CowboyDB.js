import { generateId } from "../../../../../Week 4/Day 3/homework/pokidex/app/Utils/generateId";

export const CowboyDB = {
  cowboys: [
    {
      name: 'Toby Tulone',
      mount: 'alpaca',
      weapon: 'switch',
      id: this.id || generateId()
    },
    {
      name: 'Doc Mykal',
      mount: '',
      weapon: 'LeMat Revolver',
      id: this.id || generateId()
    },
    {
      name: 'Maid Maria',
      mount: 'piebald stallion',
      weapon: "Winchester '73 Rifle",
      id: this.id || generateId()
    },
    {
      name: 'Eric the Red',
      mount: 'clydesdale',
      weapon: 'billy club',
      id: this.id || generateId()
    },
    {
      name: 'Don Dominic',
      mount: 'purebred arabian',
      weapon: 'Deringer',
      id: this.id || generateId()
    },
    {
      name: "Lil' Joshua",
      mount: '',
      weapon: '',
      id: this.id || generateId()
    }
  ],
  desperados: [
    {
      name: "Dyer Maker",
      mount: "giant lizard",
      weapon: "giant lizard",
      id: this.id || generateId()
    },
    {
      name: "Great Dane",
      mount: '',
      weapon: 'hands',
      id: this.id || generateId()
    },
    {
      name: "Three-Toed Dil",
      mount: 'mustang',
      weapon: '',
      id: this.id || generateId()
    },
    {
      name: "Zarcharias 'Second-Chance' Gamble",
      mount: 'donkey',
      weapon: 'LeMat Revolver',
      id: this.id || generateId()
    },
    {
      name: "Jumpy Jack",
      mount: '',
      weapon: 'Colt Revolver',
      id: this.id || generateId()
    }
  ]
}