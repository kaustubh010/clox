import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import Head from "next/head";

export default function Index() {
    return (
        <><Head><title>{'Clox -- Admin Panel'}</title></Head>
            <ThemeProvider theme={theme}>
                <style jsx global>{`
            footer {
            display: none;
            }
            header {
            display: none;
            }
      `}</style>
                <FullLayout>
                    <Grid container spacing={0}>
                        <Grid item xs={12} lg={12}>
                            <SalesOverview />
                        </Grid>
                        {/* ------------------------- row 1 ------------------------- */}
                        <Grid item xs={12} lg={4}>
                            <DailyActivity />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <BlogCard />
                        </Grid>
                    </Grid>
                </FullLayout>
            </ThemeProvider></>
    );
}
