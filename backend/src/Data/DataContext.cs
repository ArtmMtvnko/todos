using backend.src.Models;
using backend.src.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace backend.src.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {}

    public DbSet<Todo> Todos { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Todo>()
            .HasOne(entity => entity.Category)
            .WithMany()
            .HasForeignKey(entity => entity.CategoryId)
            .IsRequired();
    }
}