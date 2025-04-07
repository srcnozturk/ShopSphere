using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShopSphere.API.Migrations
{
    /// <inheritdoc />
    public partial class AddCartTable2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Carts_CartId",
                table: "CartItems");

            migrationBuilder.DropIndex(
                name: "IX_CartItems_CartId",
                table: "CartItems");

            migrationBuilder.AddColumn<Guid>(
                name: "CartModelId",
                table: "CartItems",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_CartModelId",
                table: "CartItems",
                column: "CartModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Carts_CartModelId",
                table: "CartItems",
                column: "CartModelId",
                principalTable: "Carts",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Carts_CartModelId",
                table: "CartItems");

            migrationBuilder.DropIndex(
                name: "IX_CartItems_CartModelId",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "CartModelId",
                table: "CartItems");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_CartId",
                table: "CartItems",
                column: "CartId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Carts_CartId",
                table: "CartItems",
                column: "CartId",
                principalTable: "Carts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
