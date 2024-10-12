namespace backend.src.Interfaces;

public interface IAuthenticationService
{
    string GenerateJwtToken(string subject);
}
