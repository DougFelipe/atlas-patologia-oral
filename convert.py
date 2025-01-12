import os
from PIL import Image

def convert_tiff_to_jpeg_or_png(folder_path, output_format="JPEG"):
    """
    Converte todos os arquivos TIFF em uma pasta para JPEG ou PNG.
    
    Parâmetros:
    - folder_path (str): Caminho da pasta contendo os arquivos TIFF.
    - output_format (str): Formato de saída ("JPEG" ou "PNG").
    """
    # Verifica se a pasta existe
    if not os.path.exists(folder_path):
        print(f"A pasta {folder_path} não existe.")
        return

    # Cria a pasta de saída
    output_folder = os.path.join(folder_path, "converted")
    os.makedirs(output_folder, exist_ok=True)

    # Itera sobre os arquivos na pasta
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".tif") or filename.lower().endswith(".tiff"):
            file_path = os.path.join(folder_path, filename)
            try:
                # Abre o arquivo TIFF
                with Image.open(file_path) as img:
                    # Define o novo nome do arquivo
                    output_file = os.path.splitext(filename)[0] + (".jpg" if output_format == "JPEG" else ".png")
                    output_path = os.path.join(output_folder, output_file)
                    
                    # Converte e salva no formato desejado
                    img = img.convert("RGB")  # Converte para RGB, necessário para JPEG
                    img.save(output_path, format=output_format)
                    print(f"Convertido: {filename} -> {output_file}")
            except Exception as e:
                print(f"Erro ao converter {filename}: {e}")

    print(f"Conversão concluída! Arquivos convertidos estão na pasta: {output_folder}")

# Caminho da pasta "temas"
folder_path = "assets/images/temas"  # Substitua pelo caminho real se for diferente

# Executa a conversão
convert_tiff_to_jpeg_or_png(folder_path, output_format="JPEG")
