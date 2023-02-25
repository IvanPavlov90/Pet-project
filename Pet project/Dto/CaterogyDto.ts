export default interface ICategoryDto {
    /* Уникальный идентификатор **/
    id: number;
    /* Название категории **/
    name: string;
    /* Ид родительской категории **/
    parentCategoryId?: number;
}