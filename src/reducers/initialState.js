const initialState = {
    data: {
        lists: [],
        selectedList: {
            id: 0,
            name: '',
            email: '',
            phone: '',
            username: '',
            website: '',
            address: {
                geo: {}
            },
            company: {}
        }
    },
    common: {
        error: {
            status: false,
            message: ''
        }
    }
}

export default initialState;