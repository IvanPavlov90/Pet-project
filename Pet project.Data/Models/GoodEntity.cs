using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pet_project.Data.Models
{
    [Table("Goods")]
    public class GoodEntity
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        /// <summary>
        /// Идентификатор категории к которой принадлежит товар
        /// </summary>
        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public CategoryEntity Category { get; set; }

        /// <summary>
        /// Наименование товара
        /// </summary>
        [StringLength(300)]
        public string Name { get; set; }

    }
}
