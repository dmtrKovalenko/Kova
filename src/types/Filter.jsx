class Filter {
    constructor(query, limit){
        this.query = query,
        this.limit = limit ? limit : 50;
    }
}

export default Filter;