const initState = {
    projects: [
        {id: '1', title: 'yoink', content: 'yuh'},
        {id: '2', title: 'yeet', content: 'yo'},
        {id: '3', title: 'help', content: 'what the'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.error('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;