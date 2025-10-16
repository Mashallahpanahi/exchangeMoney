// <?php

// namespace App\Http\Controllers\API;

// use App\Http\Controllers\Controller;
// use App\Models\customer;
// use Illuminate\Http\Request;

// class customerController extends Controller
// {
//     /**
//      * Display a listing of the resource.
//      */
//     public function index()
//     {
//         $customer = customer::all();
//         return response()->json($customer);
//     }

//     /**
//      * Store a newly created resource in storage.
//      */
//     public function store(Request $request)
//     {
//         $customer = $request->validate([
//             'name' => 'required',
//             'lastName' => 'required',
//             'job' => 'required',
//             'address' => 'required',
//             'phoneNumber' => 'required',
//             'idCard' => 'required',
//             'customerType' => 'required|in:موقت,دایم',
//         ]);

//         customer::create($customer);

//         return response()->json(["message" => "مشتری جدید اضافه شد"]);
//     }

//     /**
//      * Display the specified resource.
//      */
//     public function show(string $id)
//     {
//         //
//     }

//     /**
//      * Update the specified resource in storage.
//      */
//     public function update(Request $request, string $id)
//     {
//         // Find the customer
//         $updateCustomer = customer::find($id);
        
//         // Check if customer exists
//         if (!$updateCustomer) {
//             return response()->json(["message" => "مشتری پیدا نشد"], 404);
//         }

//         // Validate the request data
//         $validatedData = $request->validate([
//             'name' => 'required',
//             'lastName' => 'required',
//             'job' => 'required',
//             'address' => 'required',
//             'phoneNumber' => 'required',
//             'idCard' => 'required',
//             'customerType' => 'required|in:موقت,دایم',
//         ]);

//         // Update the customer with validated data - THIS WAS MISSING!
//         $updateCustomer->update($validatedData);

//         return response()->json(["message" => "مشتری مذکور تغییر یافت"]);
//     }

//     /**
//      * Remove the specified resource from storage.
//      */
//     public function destroy(string $id)
//     {
//         $customer = customer::find($id);
//         if (!$customer) {
//             return response()->json(["message" => "مشتری پیدا نشد"], 404);
//         }
        
//         $customer->delete();
//         return response()->json(["message" => "مشتری مذکور حذف شد"]);
//     }
// }