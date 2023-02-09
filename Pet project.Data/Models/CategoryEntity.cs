using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pet_project.Data.Models
{
    [Table("Categories")]
    internal class CategoryEntity
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        int Id { get; set; }

        /// <summary>
        /// Название категории
        /// </summary>
        string Name { get; set; }
    }
}
