import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    // GET DESCRIPTION
    const { description } = await req.json();
    if (!description) {
      return Response.json(
        {
          success: false,
          message: "Description not found",
          data: null,
        },
        {
          status: 400,
        }
      );
    }
    
    

    // Access your API key as an environment variable
    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      return Response.json(
        {
          success: false,
          message: "API Key not found",
          data: null,
        },
        {
          status: 500,
        }
      );
    }

    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_GEMINI_API_KEY || ""
    );

    let model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",

      }
    });

    let prompt = `I have Following Symptoms: ${description}. list 1 to 3  type of doctors I should consult as per the need for given data: 1. General Physician 2. Cardiologist 3. Gastroenterologist 4. Dermatologist 5. Neurologist 6. Ophthalmologist 7. Orthopedist 8. Pediatrician 9. Psychiatrist 10. Urologist 11. Endocrinologist 12. Pulmonologist 13. Rheumatologist 14. Nephrologist 15. Hematologist 16. Oncologist 17. Gynecologist
    respond suggestion on the same language as symptoms.
    Using this JSON schema:
{ "type": "object",
  "properties": {categories:[{
    "category_name": { "type": "string" },
  }]
    "suggestion": { "type": "string" }
    }
}
    `;

    let response = await model.generateContent(prompt);

    // convert the response to JSON
    const jsonRes = JSON.parse(response.response.text());

    return Response.json({
      success: true,
      message: "Generated Content",
      data: jsonRes,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error generating content: " + error,
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
