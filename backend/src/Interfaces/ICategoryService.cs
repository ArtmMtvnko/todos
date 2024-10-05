using backend.src.Models.Dto;

namespace backend.src.Interfaces;

public interface ICategoryService
{
    Task<bool> CategoryExist(Guid categoryId);
    Task<IEnumerable<CategoryDto>> GetCategories();
    Task<CategoryDto> GetCategoryById(Guid categoryId);
    Task<CategoryDto> CreateCategory(CreateCategoryDto createCategoryDto);
    Task<CategoryDto> UpdateCategory(Guid categoryId, CreateCategoryDto updateCategoryDto);
    Task DeleteCategory(Guid categoryId);
}