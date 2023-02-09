using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pet_project.Data.Models
{
    [Table("Goods")]
    internal class GoodEntity
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        int Id { get; set; }

        /// <summary>
        /// Идентификатор категории к которой принадлежит товар
        /// </summary>
        int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public CategoryEntity Category { get; set; }

        /// <summary>
        /// Наименование товара
        /// </summary>
        string Name { get; set; }

    }
}
