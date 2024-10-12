using backend.src.Models;
using backend.src.Models.Dto;

namespace backend.src.Interfaces;

public interface ICategoryRepository
{
    Task<bool> CategoryExist(Guid categoryId);
    Task<ICollection<Category>> GetCategories();
    Task<Category> GetCategoryById(Guid categoryId);
    Task<Category> CreateCategory(CreateCategoryDto createCategoryDto);
    Task<Category> UpdateCategory(Guid categoryId, CreateCategoryDto updateCategoryDto);
    Task DeleteCategory(Guid categoryId);
}