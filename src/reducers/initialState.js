export const initialState = {
    bord: {
        allTasK: 1,
        tasks: [
            {
                color: '#dbb600',
                id: 1,
                name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi ciendis suscipit ullam?',
                term: '20.10.20',
                priority: 'Высокий',
                categories: 'машины'
            },
            {
                color: '#db003c',
                id: 2,
                name: 'Lorem ipsum dolor sit ciendis suscipit ullam?',
                term: '20.10.20',
                priority: 'Высокий',
                categories: 'машины'
            }
        ]
    },

    categories: {
        show: true,
        CategoriesId: 1000,
        selected: 'Все',
        searchText: '',
        customCategories: [
            {
                id: 1,
                name: 'Машины',
                count: 1
            }
        ]
    },

    modals: {
        modalAddCategoriesState: {
            open: false,
            text: ''
        },
        modalChangeCategoriesState: {
            open: false,
            text: '',
            id: 0
        }
    },

    prioritySettings: {
        show: false,
        addNewPriority: {
            show: false,
            id: 5,
            text: ''
        },
        changePriorityText: {
            id:0,
            show: false,
            text: ''
        },
        priorities: [
            {
                id: 1,
                priority: 'Высокий',
                color: '#FF0000'
            },
            {
                id: 2,
                priority: 'Нормальный',
                color: '#FFDD00'
            },
            {
                id: 3,
                priority: 'Низкий',
                color: '#40FF2C'
            }
        ]
    }
};

