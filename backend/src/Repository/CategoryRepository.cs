using backend.src.Data;
using backend.src.Interfaces;
using backend.src.Models;
using backend.src.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace backend.src.Repository;

public class CategoryRepository : ICategoryRepository
{
    private readonly DataContext _context;

    public CategoryRepository(DataContext dataContext)
    {
        _context = dataContext;
    }

    private async Task<bool> Save()
    {
        var saved = await _context.SaveChangesAsync();
        return saved > 0 ? true : false;
    }

    public async Task<bool> CategoryExist(Guid categoryId)
    {
        return await _context.Categories.AnyAsync(category => category.Id == categoryId);
    }

    public async Task<ICollection<Category>> GetCategories()
    {
        return await _context.Categories
            .OrderBy(category => category.CreatedAt)
            .ToListAsync();
    }

    public async Task<Category> GetCategoryById(Guid categoryId)
    {
        var category = await _context.Categories.FindAsync(categoryId);

        if (category == null)
            throw new Exception($"Entity with id [{categoryId}] has not been found");

        return category;
    }

    public async Task<Category> CreateCategory(CreateCategoryDto createCategoryDto)
    {
        var createdCategory = new Category()
        {
            Id = Guid.NewGuid(),
            Name = createCategoryDto.Name,
            CreatedAt = DateTime.UtcNow
        };

        await _context.Categories.AddAsync(createdCategory);

        bool saved = await Save();

        if (!saved)
            throw new Exception("Data was not saved. Something went wrong");
        
        return createdCategory;
    }

    public async Task<Category> UpdateCategory(Guid categoryId, CreateCategoryDto updateCategoryDto)
    {
        var existedCategory = await GetCategoryById(categoryId);

        existedCategory.Name = updateCategoryDto.Name;

        bool saved = await Save();

        if (!saved)
            throw new Exception("Data was not saved. Something went wrong");
        
        return existedCategory;
    }

    public async Task DeleteCategory(Guid categoryId)
    {
        var categoryToRemove = await GetCategoryById(categoryId);

        _context.Categories.Remove(categoryToRemove);

        bool saved = await Save();

        if (!saved)
            throw new Exception("Data was not saved. Something went wrong");
    }
}