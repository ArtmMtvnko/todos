using backend.src.Models;
using backend.src.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace backend.src.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {}

    public DbSet<TodoDto> Todos { get; set; }
    public DbSet<CategoryDto> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Todo>()
            .HasOne(todo => todo.Category)
            .WithMany(category => category.Todos)
            .HasForeignKey(todo => todo.CategoryId);
    }
}