interface Api {
    limit?: number;
    offset?: number;
    [anyprop:string]: any;
}

interface List extends Api {
    id: number
}

export {
    Api,
    List
}