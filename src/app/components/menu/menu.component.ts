import { Component } from '@angular/core';
import { Menu } from '../../modules/menu';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public MenuProperty: Array<Menu> = [
    {
      id: '1',
      name: 'Tableau de bord',
      icon: 'dashboard',
      path: '',
      subMenu: [
        {
          id: '11',
          name: 'vue d\'ensemble',
          icon: '',
          path: '',

        },
        {
          id: '12',
          name: 'Statistique',
          icon: '',
          path: '',

        },
      ]

    },
    {
      id: '2',
      name: 'Scolaire',
      icon: 'card_travel',
      path: '',
      subMenu: [
        {
          id: '21',
          name: 'vue d\'ensemble',
          icon: '',
          path: '',

        },
        {
          id: '22',
          name: 'classe',
          icon: '',
          path: '',

        },

        {
          id: '23',
          name: 'modification',
          icon: '',
          path: '',

        }, {
          id: '24',
          name: 'Offre',
          icon: '',
          path: '',

        },

        {
          id: '25',
          name: 'section',
          icon: '',
          path: '',

        },
      ]

    },

   
    {
      id: '4',
      name: 'Professeur',
      icon: 'group',
      path: '',
      subMenu: [
        {
          id: '31',
          name: 'liste',
          icon: '',
          path: '',

        },
        {
          id: '32',
          name: 'Ajouter',
          icon: '',
          path: '',

        },

        {
          id: '33',
          name: 'Modification',
          icon: '',
          path: '',

        },
        {
          id: '34',
          name: 'emargemnt',
          icon: '',
          path: '',

        },
      ]

    },
    {
      id: '5',
      name: 'Employer',
      icon: 'people_outline',
      path: '',
      subMenu: [
        {
          id: '51',
          name: 'liste',
          icon: '',
          path: '',

        },
        {
          id: '52',
          name: 'Ajouter',
          icon: '',
          path: '',

        },

        {
          id: '53',
          name: 'Modification',
          icon: '',
          path: '',

        },
      ]

    },
    {
      id: '6',
      name: 'Comptabilité',
      icon: 'account_balance',
      path: '',
      subMenu: [
        {
          id: '61',
          name: 'vue d\'ensemble',
          icon: '',
          path: '',

        },
        {
          id: '62',
          name: 'Statistique',
          icon: '',
          path: '',

        },

        {
          id: '63',
          name: 'Paiement',
          icon: '',
          path: '',

        },
      ]

    },
  
    {
      id: '7',
      name: 'Elèves',
      icon: 'group',
      path: '',
      subMenu: [
        {
          id: '71',
          name: 'vue d\'ensemble',
          icon: '',
          path: '',

        },
        {
          id: '72',
          name: 'liste',
          icon: '',
          path: '',

        },

        {
          id: '73',
          name: 'Paiement',
          icon: '',
          path: '',

        },
      ]

    },
 



  ]
}

