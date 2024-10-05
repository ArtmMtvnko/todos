using backend.src.Interfaces;
using backend.src.Models.Dto;
using Microsoft.AspNetCore.Mvc;

namespace backend.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : Controller
{
    private readonly ICategoryService _categoryService;

    public CategoryController(ICategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var categories = await _categoryService.GetCategories();
        return Ok(categories);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] Guid id)
    {
        if (!await _categoryService.CategoryExist(id))
            return NotFound();

        var category = await _categoryService.GetCategoryById(id);
        return Ok(category);        
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateCategoryDto createCategoryDto)
    {
        if (createCategoryDto == null || !ModelState.IsValid)
            return BadRequest(ModelState);

        var createdCategory = await _categoryService.CreateCategory(createCategoryDto);
        return Ok(createdCategory);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] CreateCategoryDto updateCategoryDto)
    {
        if (updateCategoryDto == null || !ModelState.IsValid)
            return BadRequest(ModelState);

        if (!await _categoryService.CategoryExist(id))
            return NotFound();

        var updatedCategoryDto = await _categoryService.UpdateCategory(id, updateCategoryDto);
        return Ok(updatedCategoryDto);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        if (!await _categoryService.CategoryExist(id))
            return NotFound();
        
        await _categoryService.DeleteCategory(id);
        return NoContent();
    }
}