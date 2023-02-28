namespace Pet_project.Dto
{
    public class CategoryDto
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Название категории
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Ид родительской категории
        /// </summary>
        public int? ParentCategoryId { get; set; }
    }
}
