using System.Runtime.CompilerServices;

Clientes misClientes = new Clientes("Jose de Jesus", "4492598524", "Gerona #2", "jesusalvarado@outlook.com", true);
Console.WriteLine(misClientes.ToString());

public struct Clientes
{
    public Clientes(string nombreCompleto, string telefono, string direccion, string email, bool nuevoCliente)
    {
        NombreCompleto = nombreCompleto;
        Telefono = telefono;
        Direccion = direccion;
        Email = email;
        NuevoCliente = nuevoCliente;


    }

    public string NombreCompleto { get; set; }
    public string Telefono { get; set; }
    public string Direccion { get; set; }
    public string Email { get; set; }
    public bool NuevoCliente { get; set; }

    public override string ToString() => $"(Nombre: {NombreCompleto}, Telefono: {Telefono}, Direccion: {Direccion},Email: {Email},Nuevo Cliente: {NuevoCliente})";
}