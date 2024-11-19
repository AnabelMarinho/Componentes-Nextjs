import React from "react";

interface CardProps {
  title: string; // O título do card
  description: string; // A descrição do card
  imageUrl?: string; // URL da imagem (opcional)
  buttonText?: string; // Texto do botão (opcional)
  onButtonClick?: () => void; // Função chamada ao clicar no botão (opcional)
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden sm:max-w-md lg:max-w-lg">
      {/* Imagem */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Conteúdo */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      {/* Botão */}
      {buttonText && (
        <div className="p-4 bg-gray-100 flex justify-end">
          <button
            onClick={onButtonClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
