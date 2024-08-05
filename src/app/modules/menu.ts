export interface Menu{
    id ?:String;
    name? :String;
    icon ?:String;
    path ?:String;
    subMenu?:Array<Menu>;
}