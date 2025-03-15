using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ShopSphere.API.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    isActive = table.Column<bool>(type: "bit", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Stock = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price", "Stock", "isActive" },
                values: new object[,]
                {
                    { new Guid("1557224f-acc0-4bf4-a496-0ba39fe2cf44"), "Iphone 14 Description", "https://via.placeholder.com/150", "Iphone 14", 50000m, 30, true },
                    { new Guid("63e2f02c-c529-4ee5-9eff-7dfe31288098"), "Iphone 16 Description", "https://via.placeholder.com/150", "Iphone 16", 70000m, 10, true },
                    { new Guid("a7053963-5521-4672-bc8d-73faff51686f"), "Iphone 15 Description", "https://via.placeholder.com/150", "Iphone 15", 60000m, 20, true }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
