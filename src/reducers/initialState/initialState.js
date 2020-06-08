export const initialState = {
    bord: {
        tasks: [
        ],
        sortPanel: {
            text: '',
            statusTasks: 'Все статусы',
            statusPriority: 'Все приоритеты'
        },

        modal: {
            createTask: {
                show: false,
                id: 4,
                term: '',
            },

            changeTask: {
                show: false,
                id: 0,
                name: '',
                term: '',
                priority: '',
                categories: '',
                done: null
            }
        }
    },

    categories: {
        show: true,
        CategoriesId: 1000,
        selected: 'Все',
        searchText: '',
        customCategories: [
        ],

        modals: {
            modalAddCategoriesState: {
                open: false,
            },
            modalChangeCategoriesState: {
                open: false,
                text: '',
                id: 0
            }
        }
    },


    prioritySettings: {
        show: false,
        addNewPriority: {
            show: false,
            id: 5,
        },
        changePriorityText: {
            id: 0,
            show: false,
        },
        priorities: [
            {
                id: 1,
                priority: 'Высокий',
                color: '#e57373'
            },
            {
                id: 2,
                priority: 'Нормальный',
                color: '#ffb74d'
            },
            {
                id: 3,
                priority: 'Низкий',
                color: '#64b5f6'
            }
        ]
    }
};

