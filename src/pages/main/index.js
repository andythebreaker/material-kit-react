/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import { nanoid } from "nanoid";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/hp.jpg";

function Presentation() {
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  const [count, setCounter] = useState(25);

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
            <InputRange
              maxValue={100}
              minValue={0}
              value={count}
              onChange={(value) => {
                setCounter(value);
              }}
            />
          </Grid>
        </Container>
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              yolov5第7版_預測前端{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              使用ttpla_dataset
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              設定
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      className="fname"
                      variant="standard"
                      label="name"
                      value={nanoid()}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="conf (default:0.25)"
                      fullWidth
                      className="fconf"
                      value={count / 100}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="模型位置(請提供github連結)"
                      className="fmduri"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="檔案位置(由檔案下載處複製)"
                      fullWidth
                      className="fsosu"
                    />
                  </Grid>
                  <Grid item xs={12} alignItems="center" ml={-1}>
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;使用CPU&nbsp;
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      〔請不要動這個選項如果你不確定你有沒有GPU〕
                    </MKTypography>
                  </Grid>
                  <Grid item xs={12} alignItems="center" ml={-1}>
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;save_txt&nbsp;
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      _
                    </MKTypography>
                  </Grid>
                  <Grid item xs={12} alignItems="center" ml={-1}>
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;save_conf&nbsp;
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      _
                    </MKTypography>
                  </Grid>
                  <Grid item xs={12} alignItems="center" ml={-1}>
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;save_crop&nbsp;
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      _
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <a
                    href=":8080/test/blah"
                    className="btn btn-primary btn-lg disabled"
                    role="button"
                    aria-disabled="true"
                    target="blank"
                  >
                    <MKButton
                      onClick="alert('message');"
                      variant="gradient"
                      color="dark"
                      fullWidth
                      className="cmdexe"
                    >
                      執行〔請耐心等待〕
                    </MKButton>
                  </a>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container sx={{ mt: 6 }}>
          <MKBox
            display="flex"
            alignItems="center"
            borderRadius="xl"
            my={2}
            py={6}
            sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Container>
              <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
                <MKTypography variant="h4" color="white" fontWeight="bold">
                  _
                </MKTypography>
                <MKTypography variant="h1" color="white" mb={1}>
                  使用說明
                </MKTypography>
                <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
                  到檔案下載處觀察exp之最大值〔若無為零〕〔記住他〕，選擇一模型，複製其位址，貼到設定區；設定其他數值，給予愈被觀測之資料〔可先由檔案上傳處上傳檔案再由檔案下載複製連結至設定處貼上〕；按下執行，觀察並等待檔案下載處exp值增加，進入新的exp檔案看結果
                </MKTypography>
                <MKTypography
                  component="a"
                  href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  color="white"
                  fontWeight="regular"
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      fontSize: "1.125rem",
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  影片 <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </Grid>
            </Container>
          </MKBox>
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                className="mod11l"
                color="info"
                icon="flag"
                title="模型11號"
                description="cpu每禎判斷時間:(ms)；gpu每禎判斷時間:(ms)；訓練影像大小:；模型大小:"
                action={{
                  type: "external",
                  route:
                    "https://github.com/andythebreaker/pythonRelay4y5v7fnd/raw/main/ttplapts/best11.pt",
                  label: "載入",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                className="mod14l"
                icon="precision_manufacturing"
                title="模型14號"
                description="cpu每禎判斷時間:(ms)；gpu每禎判斷時間:(ms)；訓練影像大小:；模型大小:"
                action={{
                  type: "external",
                  route:
                    "https://github.com/andythebreaker/pythonRelay4y5v7fnd/raw/main/ttplapts/best14.pt",
                  label: "載入",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="模型15號"
                className="mod15l"
                description="cpu每禎判斷時間:(ms)；gpu每禎判斷時間:(ms)；訓練影像大小:；模型大小:"
                action={{
                  type: "external",
                  route:
                    "https://github.com/andythebreaker/pythonRelay4y5v7fnd/raw/main/ttplapts/best15.pt",
                  label: "載入",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  檔案上傳
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  上傳檔案到伺服器
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <a
                  href=":8080/test/blah"
                  className="btn btn-primary btn-lg disabled cssupfile"
                  role="button"
                  aria-disabled="true"
                  target="blank"
                >
                  <MKButton onClick="alert('message');" variant="gradient" color="dark" fullWidth>
                    進入點
                  </MKButton>
                </a>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  檔案庫
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  檢視已上傳的檔案
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <a
                  href=":8080/test/blah"
                  className="btn btn-primary btn-lg disabled cssseefile"
                  role="button"
                  aria-disabled="true"
                  target="blank"
                >
                  <MKButton onClick="alert('message');" variant="gradient" color="dark" fullWidth>
                    進入點
                  </MKButton>
                </a>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  檢視結果
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  檢視判斷運行結果
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <a
                  href=":8080/test/blah"
                  className="btn btn-primary btn-lg disabled cssseerslt"
                  role="button"
                  aria-disabled="true"
                  target="blank"
                >
                  <MKButton onClick="alert('message');" variant="gradient" color="dark" fullWidth>
                    進入點
                  </MKButton>
                </a>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
