using backend.src.Interfaces;
using backend.src.Models;
using backend.src.Models.Dto;

namespace backend.src.Services;

public class CategoryService : ICategoryService
{
    private readonly ICategoryRepository _categoryRepository;

    public CategoryService(ICategoryRepository categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }
    
    public async Task<bool> CategoryExist(Guid categoryId)
    {
        return await _categoryRepository.CategoryExist(categoryId);
    }

    public async Task<IEnumerable<Category>> GetCategories()
    {
        return await _categoryRepository.GetCategories();
    }

    public async Task<Category> GetCategoryById(Guid categoryId)
    {
        return await _categoryRepository.GetCategoryById(categoryId);
    }

    public async Task<Category> CreateCategory(CreateCategoryDto createCategoryDto)
    {
        return await _categoryRepository.CreateCategory(createCategoryDto);
    }

    public async Task<Category> UpdateCategory(Guid categoryId, CreateCategoryDto updateCategoryDto)
    {
        return await _categoryRepository.UpdateCategory(categoryId, updateCategoryDto);
    }

    public async Task DeleteCategory(Guid categoryId)
    {
        await _categoryRepository.DeleteCategory(categoryId);
    }
}