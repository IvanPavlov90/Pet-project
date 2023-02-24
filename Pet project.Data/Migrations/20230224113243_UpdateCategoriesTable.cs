using Microsoft.EntityFrameworkCore.Migrations;

namespace Pet_project.Data.Migrations
{
    public partial class UpdateCategoriesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ParentCategoryId",
                table: "Categories",
                type: "int",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "Name", "ParentCategoryId" },
                values: new object[,]
                {
                    { 1, "Запасные части к комбайнам", null },
                    { 2, "Запасные части к тракторам", null },
                    { 3, "Запасные части к почвообрабатывающей технике", null },
                    { 4, "Запасные части к сеялкам", null },
                    { 5, "Запасные части к двигателям", null },
                    { 6, "ACROS-580", 1 },
                    { 7, "ACROS-595", 1 },
                    { 8, "МТЗ-1221", 2 },
                    { 9, "К-700", 2 },
                    { 10, "К-744", 2 },
                    { 11, "Bellota", 3 },
                    { 12, "РЗЗ", 3 },
                    { 13, "СЗ-3,6", 4 },
                    { 14, "МС-8", 4 },
                    { 15, "Д-245", 5 },
                    { 16, "ЯМЗ-236", 5 },
                    { 17, "ЯМЗ-238", 5 },
                    { 18, "Cummins", 5 },
                }
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentCategoryId",
                table: "Categories");
        }
    }
}
