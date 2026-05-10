// app/maintenance/page.tsx

export default function MaintenancePage() {
    return (
        <div className="flex min-h-screen items-center justify-center flex-col">
            <h1 className="text-4xl font-bold">
                System is under maintenance
            </h1>

            <h4 className="text-light">
                We are doing some routine update on our site, please be patient we will back soon.
            </h4>
            <p className="mt-4 text-gray-500">Please contact us at <a href="mailto:info@healthycola.com">info@healthycola.com</a> for more information.</p>
        </div>
    )
}
