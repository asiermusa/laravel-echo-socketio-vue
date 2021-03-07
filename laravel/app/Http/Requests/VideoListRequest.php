<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoListRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'limit' => 'integer|max:50|min:1',
            'page' => 'integer|min:1'
        ];
    }

    public function getLimit(): int
    {
      return $this->limit ?? 10;
    }

    public function getPage(): int
    {
      return $this->page ?? 1;
    }
}
