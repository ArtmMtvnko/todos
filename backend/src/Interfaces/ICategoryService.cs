using backend.src.Models;
using backend.src.Models.Dto;

namespace backend.src.Interfaces;

public interface ICategoryService
{
    Task<bool> CategoryExist(Guid categoryId);
    Task<IEnumerable<Category>> GetCategories();
    Task<Category> GetCategoryById(Guid categoryId);
    Task<Category> CreateCategory(CreateCategoryDto createCategoryDto);
    Task<Category> UpdateCategory(Guid categoryId, CreateCategoryDto updateCategoryDto);
    Task DeleteCategory(Guid categoryId);
}