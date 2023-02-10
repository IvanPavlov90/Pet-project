using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pet_project.Data.Models
{
    [Table("Categories")]
    public class CategoryEntity
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        /// <summary>
        /// Название категории
        /// </summary>
        [StringLength(200)]
        public string Name { get; set; }
    }
}
