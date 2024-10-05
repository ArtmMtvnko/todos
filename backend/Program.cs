using backend.src.Data;
using backend.src.Interfaces;
using backend.src.Repository;
using backend.src.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

DotNetEnv.Env.Load();

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<DataContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

    connectionString = connectionString?
        .Replace("${DB_HOST}", Environment.GetEnvironmentVariable("DB_HOST"))
        .Replace("${DB_PORT}", Environment.GetEnvironmentVariable("DB_PORT"))
        .Replace("${DB_DATABASE}", Environment.GetEnvironmentVariable("DB_DATABASE"))
        .Replace("${DB_USERNAME}", Environment.GetEnvironmentVariable("DB_USERNAME"))
        .Replace("${DB_PASSWORD}", Environment.GetEnvironmentVariable("DB_PASSWORD"));

    options.UseNpgsql(connectionString);
});

builder.Services.AddScoped<ITodoService, TodoService>();
builder.Services.AddScoped<ITodoRepository, TodoRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
