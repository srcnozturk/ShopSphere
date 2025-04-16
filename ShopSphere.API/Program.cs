using Microsoft.EntityFrameworkCore;
using ShopSphere.API.Data;
using ShopSphere.API.Entitiy;
using ShopSphere.API.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>{
    var config = builder.Configuration;
    var connectionString = config.GetConnectionString("DefaultConnection");
    options.UseSqlServer(connectionString);
});

builder.Services.AddCors();
builder.Services.AddIdentity<AppUser, AppRole>().AddEntityFrameworkStores<ApplicationDbContext>();
builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();
app.UseMiddleware<ExceptionHandling>();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options =>options.SwaggerEndpoint("/openapi/v1.json", "ShopSphere API"));
}

app.UseHttpsRedirection();
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().AllowCredentials().WithOrigins("http://localhost:3000");
});
app.UseAuthorization();
app.UseStaticFiles();
app.MapControllers();

app.Run();
