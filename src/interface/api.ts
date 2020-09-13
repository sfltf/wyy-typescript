export default interface Api {
    limit: number;
    offset?: number;
    [anyprop:string]: any ;
}