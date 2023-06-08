<?php

namespace App\Http\Middleware;

use Closure;

class RoleMiddleware
{
    /**
     * Run the request filter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        $user = $request->user();

        if(!$user) {
            return redirect()->route('login', 401);
        }

        if (!$user->hasRole(...explode('|', $role))) {
            return redirect()->route('home', 403);
        }

        return $next($request);
    }

}
