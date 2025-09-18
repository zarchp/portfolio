<?php

declare(strict_types=1);

?>
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="Anzar Syahid is an experienced full-stack web developer specializing in Laravel, React, and modern web apps. Explore his portfolio of projects and achievements.">

    <link rel="canonical" href="https://anzar.dev">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://anzar.dev" />
    <meta property="og:site_name" content="Anzar Syahid Portfolio">
    <meta property="og:title" content="{{ config('app.name', 'Laravel') }}" />
    <meta property="og:description"
        content="Anzar Syahid is an experienced full-stack web developer specializing in Laravel, React, and modern web apps. Explore his portfolio of projects and achievements." />
    <meta property="og:image" content="https://anzar.dev/images/og-preview.jpg" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://anzar.dev" />
    <meta property="twitter:title" content="{{ config('app.name', 'Laravel') }}" />
    <meta property="twitter:description"
        content="Anzar Syahid is an experienced full-stack web developer specializing in Laravel, React, and modern web apps. Explore his portfolio of projects and achievements." />
    <meta property="twitter:image" content="https://anzar.dev/images/og-preview.jpg" />

    {{-- <script defer src="https://analytics.anzar.dev/script.js" data-website-id="78005ed6-e7ed-4be1-b29d-6b1bce8f11fa"></script> --}}
    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    {{-- title is set in the inertia head --}}
    {{-- <title inertia>{{ config('app.name', 'Laravel') }}</title> --}}

    <link rel="icon" href="/favicon.ico" sizes="any">
    {{-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> --}}
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <link rel="preconnect" href="https://i.gr-assets.com">

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
<?php
